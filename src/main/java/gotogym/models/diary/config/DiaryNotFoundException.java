package gotogym.models.diary.config;

import gotogym.commons.Utils;
import gotogym.commons.exceptions.AlertBackException;
import org.springframework.http.HttpStatus;

public class DiaryNotFoundException extends AlertBackException {
    public DiaryNotFoundException() {
        super(Utils.getMessage("NotFound.board", "error"));
        setStatus(HttpStatus.NOT_FOUND);
    }
}
