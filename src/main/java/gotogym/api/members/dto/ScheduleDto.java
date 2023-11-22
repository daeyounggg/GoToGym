package gotogym.api.members.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Data
@ToString
@Getter @Setter
public class ScheduleDto {
    int schedule_idx;
    int schedule_num;
    String schedule_subject;
    String schedule_desc;
    Date schedule_date;

    String schedule_share;
    String schedule_mycolor;
}
