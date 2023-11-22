package gotogym.api.members.dto;

import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
<<<<<<< HEAD
import jakarta.validation.constraints.Size;
=======
>>>>>>> support

public record RequestJoin(
        @NotBlank @Email
        String email,

        @NotBlank
<<<<<<< HEAD
        @Size(min=8)
=======
>>>>>>> support
        String password,

        @NotBlank
        String confirmPassword,

        @NotBlank
        String name,

        @NotBlank
        String mobile,

        @AssertTrue
        boolean agree
) {}
