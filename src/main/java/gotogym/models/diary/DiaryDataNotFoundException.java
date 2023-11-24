package gotogym.models.diary;

import gotogym.commons.exceptions.AlertBackException;
import org.springframework.http.HttpStatus;

public class DiaryDataNotFoundException extends AlertBackException {
    public DiaryDataNotFoundException() {
        super("등록되지 않은 게시글 입니다.");
        setStatus(HttpStatus.NOT_FOUND);
    }
}

