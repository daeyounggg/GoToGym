package gotogym.repositories;

import gotogym.entities.Diary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaryRepository extends JpaRepository<Diary, Long> {
}
