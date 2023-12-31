package gotogym.models.board;

import gotogym.commons.exceptions.CommonException;
import org.springframework.http.HttpStatus;

/**
 * 게시판 유효성 검사
 *
 */
public class BoardValidationException  extends CommonException {
    public BoardValidationException(String code) {
        super(bundleValidation.getString(code), HttpStatus.BAD_REQUEST);
    }
}
