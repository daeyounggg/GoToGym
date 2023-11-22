package gotogym.models.member;

import gotogym.entities.Diary;
import gotogym.repositories.DiaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiaryService {
    @Autowired
    private DiaryRepository diaryRepository;

    public List<Diary> getAllDiaries() {
        return diaryRepository.findAll();
    }

    public Diary saveDiary(Diary diary){
        return diaryRepository.save(diary);
    }

    public List<Diary> getExerciseRecordsByMemberId(Long memberId) {
        return diaryRepository.findByMemberId(memberId);
    }
}
