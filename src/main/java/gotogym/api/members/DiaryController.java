package gotogym.api.members;

import gotogym.api.members.dto.ScheduleDto;
import gotogym.models.member.DiaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/diaries")
@RequiredArgsConstructor
public class DiaryController {
    private final DiaryService diaryService;
    @PostMapping
    public ResponseEntity saveEvent(@RequestBody ScheduleDto dto){

        ScheduleDto scheduleDto = diaryService.save(dto);

        return ResponseEntity.ok(scheduleDto);
    }
}
