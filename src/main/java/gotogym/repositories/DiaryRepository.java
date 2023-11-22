package gotogym.repositories;

import gotogym.entities.Diary;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface DiaryRepository extends JpaRepository<Diary, Long> {

    List<Diary> findByEventDate(Date eventDate);
}
