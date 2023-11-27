package gotogym.models.diary;

import gotogym.commons.exceptions.AlertBackException;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Setter
public class DiaryDataNotFoundException extends AlertBackException {
    private HttpStatus status;

    public DiaryDataNotFoundException() {
        super("등록되지 않은 게시글 입니다.");
        setStatus(HttpStatus.NOT_FOUND);
    }

}

