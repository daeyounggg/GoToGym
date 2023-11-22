package gotogym.api.members;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/diaries")
public class DiaryController {
    /*

    @Autowired
    private DiaryService diaryService;

    @GetMapping
    public List<Diary> getAllDiaries() {
        return diaryService.getAllDiaries();
    }

    @GetMapping("/token")
    public List<Diary> getExerciseRecordsByMemberId(@PathVariable Long memberId) {
        return diaryService.getExerciseRecordsByMemberId(memberId);
    }


    @PostMapping
    public Diary saveDiary(@RequestBody Diary diary) {
        return diaryService.saveDiary(diary);
    }
     */
}
