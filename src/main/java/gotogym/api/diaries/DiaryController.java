package gotogym.api.diaries;

import gotogym.commons.ScriptExceptionProcess;
import gotogym.commons.Utils;
import gotogym.entities.DiaryData;
import gotogym.models.diary.DiaryInfoService;
import gotogym.models.diary.DiarySaveService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Controller("Controller2")
@RequestMapping("/board")
@RequiredArgsConstructor
public class DiaryController implements ScriptExceptionProcess {
    private final Utils utils;
    private final DiarySaveService saveService;
    private final DiaryInfoService infoService;

    @GetMapping("/write/{bId}")
    public String write(@PathVariable("bId") String bId, @ModelAttribute DiaryForm form, Model model) {
        commonProcess(bId, "write", model);

        return utils.tpl("diary/write");
    }

    @GetMapping("/update/{seq}")
    public String update(@PathVariable("seq") Long seq, Model model) {
        return utils.tpl("diary/update");
    }

    @PostMapping("/save")
    public String save(@Valid DiaryForm form, Errors errors, Model model) {
        String mode = Objects.requireNonNullElse(form.getMode(), "write");
        String bId = form.getBId();

        commonProcess(bId, mode, model);

        if (errors.hasErrors()) {
            return utils.tpl("diary/" + mode);
        }

        saveService.save(form);

        return "redirect:/diary/list/" + bId;
    }

    @GetMapping("/view/{seq}")
    public String view(@PathVariable("seq") Long seq, Model model) {

        DiaryData data = infoService.get(seq);

        model.addAttribute("diaryData", data);

        return utils.tpl("diary/view");
    }

    @GetMapping("/delete/{seq}")
    public String delete(@PathVariable Long seq) {

        return "redirect:/diary/list/게시판 ID";
    }

    private void commonProcess(String bId, String mode, Model model) {
        String pageTitle = "게시글 목록";
        if (mode.equals("write")) pageTitle = "게시글 작성";
        else if (mode.equals("update")) pageTitle = "게시글 수정";
        else if (mode.equals("view")) pageTitle = "게시글 제목";

        List<String> addCommonScript = new ArrayList<>();
        List<String> addScript = new ArrayList<>();

        if (mode.equals("write") || mode.equals("update")) {
            addCommonScript.add("ckeditor/ckeditor");
            addCommonScript.add("fileManager");

            addScript.add("diary/form");
        }

        model.addAttribute("addCommonScript", addCommonScript);
        model.addAttribute("addScript", addScript);
        model.addAttribute("pageTitle", pageTitle);
    }
}