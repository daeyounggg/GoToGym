package gotogym.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;


@Data
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Diary extends BaseMember{
    @Id
    @GeneratedValue
    private Long id;

    @Column(length = 100, nullable = false)
    private String subject;

    @Lob
    @Column(nullable = false)
    private String content;

    private LocalDate startDate;
    private LocalDate endDate;



}
