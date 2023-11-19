package gotogym.api.members;

import gotogym.entities.Diary;
import gotogym.models.member.DiaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/diaries")
public class DiaryController {

    @Autowired
    private DiaryService diaryService;

    @GetMapping
    public List<Diary> getAllDiaries() {
        return diaryService.getAllDiaries();
    }

    @PostMapping
    public Diary saveDiary(@RequestBody Diary diary) {
        return diaryService.saveDiary(diary);
    }
}
