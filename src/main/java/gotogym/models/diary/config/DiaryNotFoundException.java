package gotogym.models.diary.config;

import gotogym.api.ApiCommonController;
import gotogym.commons.Utils;
import gotogym.commons.exceptions.AlertBackException;
import org.springframework.http.HttpStatus;

public class DiaryNotFoundException extends AlertBackException {
    public DiaryNotFoundException() {
        super(Utils.getMessage("NotFound.diary", "error"));
        setStatus(HttpStatus.NOT_FOUND);
    }
}
