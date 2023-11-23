package gotogym.api.members.dto;

import gotogym.entities.Diary;
import gotogym.entities.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@NoArgsConstructor
@Getter
public class ScheduleDto {

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate sDate;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate eDate;

    private String subject;
    private String content;

    public Diary toDiary(Member member){
        Diary diary = Diary.builder()
                .startDate(sDate)
                .endDate(eDate)
                .subject(subject)
                .content(content)
                .build();

        return diary;
    }

}
