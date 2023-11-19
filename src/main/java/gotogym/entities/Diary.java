package gotogym.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Data
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Diary {
    @Id
    @GeneratedValue
    private Long id;

    private String content;

    private LocalDateTime createdAt;
}
