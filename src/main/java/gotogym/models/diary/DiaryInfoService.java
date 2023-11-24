package gotogym.models.diary;

import gotogym.entities.DiaryData;
import gotogym.repositories.DiaryDataRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DiaryInfoService {
    private final DiaryDataRepository diaryDataRepository;
    public DiaryData get(Long seq) {

        DiaryData data = diaryDataRepository.findById(seq).orElseThrow(DiaryDataNotFoundException::new);

        return data;
    }
}
