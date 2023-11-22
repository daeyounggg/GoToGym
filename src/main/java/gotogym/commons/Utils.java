package gotogym.commons;

import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;

import java.util.*;

public class Utils {
    private static ResourceBundle validationsBundle;
    private static ResourceBundle errorsBundle;

    static {
        validationsBundle = ResourceBundle.getBundle("messages.validations");
        errorsBundle = ResourceBundle.getBundle("messages.errors");
    }

    public static String getMessage(String code, String bundleType) {
        bundleType = Objects.requireNonNullElse(bundleType, "validation");
        ResourceBundle bundle = bundleType.equals("error")? errorsBundle:validationsBundle;
        try {
            return bundle.getString(code);
        } catch (Exception e) {
            return null;
        }
    }

    public static Map<String, List<String>> getMessages(Errors errors) {
        Map<String, List<String>> data = new HashMap<>();
        for (FieldError error : errors.getFieldErrors()) {
            List<String> messages = Arrays.stream(error.getCodes()).sorted(Comparator.reverseOrder())
                    .map(c -> getMessage(c, "validation")).filter(s -> s != null && !s.isBlank()).toList();

            data.put(error.getField(), messages);
        }

       return data;



    }
}
