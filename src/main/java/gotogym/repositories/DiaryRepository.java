package gotogym.repositories;

import gotogym.entities.Diary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

public interface DiaryRepository extends JpaRepository<Diary, Long>, QuerydslPredicateExecutor<Diary> {


}
