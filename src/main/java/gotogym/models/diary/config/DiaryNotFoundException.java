package gotogym.models.diary.config;

import gotogym.commons.Utils;
import gotogym.commons.exceptions.AlertBackException;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Setter
public class DiaryNotFoundException extends AlertBackException {
    private HttpStatus status;

    public DiaryNotFoundException() {
        super(Utils.getMessage("NotFound.diary", "error"));
        setStatus(HttpStatus.NOT_FOUND);
    }
}
