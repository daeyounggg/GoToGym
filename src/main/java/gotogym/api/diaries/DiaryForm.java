package gotogym.api.diaries;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class DiaryForm {

    private String mode;
    private Long seq;

    private String bId;

    @NotBlank(message="제목을 입력하세요.")
    private String subject;

    @NotBlank(message="내용을 입력하세요.")
    private String content;
}
