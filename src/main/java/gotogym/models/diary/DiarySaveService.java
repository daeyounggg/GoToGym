package gotogym.models.diary;

import gotogym.api.diaries.DiaryForm;
import gotogym.entities.DiaryData;
import gotogym.repositories.DiaryDataRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@RequiredArgsConstructor
public class DiarySaveService {
    private final DiaryDataRepository diaryDataRepository;

    public void save(DiaryForm form) {
        Long seq = form.getSeq();
        String mode = Objects.requireNonNullElse(form.getMode(), "add");

        DiaryData data = null;
        if (mode.equals("update") && seq != null) {
            data = diaryDataRepository.findById(seq).orElseThrow(DiaryDataNotFoundException::new);
        } else {
            data = new DiaryData();
        }

        data.setSubject(form.getSubject());
        data.setContent(form.getContent());

        diaryDataRepository.saveAndFlush(data);
    }
}
