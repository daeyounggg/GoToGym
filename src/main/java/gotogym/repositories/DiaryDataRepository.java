package gotogym.repositories;

import gotogym.entities.DiaryData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

public interface DiaryDataRepository extends JpaRepository<DiaryData, Long>, QuerydslPredicateExecutor<DiaryData> {


}
