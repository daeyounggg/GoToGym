package gotogym.models.file;

import gotogym.commons.Utils;
import gotogym.commons.exceptions.CommonException;
import org.springframework.http.HttpStatus;

public class FileNotFoundException extends CommonException {

    public FileNotFoundException() {
        super(Utils.getMessage("NotFound.file", "error"), HttpStatus.NOT_FOUND);
    }
}