package gotogym.models.member;

import gotogym.api.members.dto.ScheduleDto;
import gotogym.repositories.DiaryDataRepository;
import gotogym.repositories.MemberRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
public class DiaryService {

    private final DiaryDataRepository diaryRepository;
    private final MemberRepository memberRepository;

    public ScheduleDto save(ScheduleDto dto){


        return dto;
    }

}
