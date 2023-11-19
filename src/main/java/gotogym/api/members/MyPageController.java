package gotogym.api.members;

import gotogym.entities.Diary;
import gotogym.entities.Member;
import gotogym.models.member.DiaryService;
import gotogym.models.member.MemberInfo;
import gotogym.models.member.MemberInfoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/mypage")
@RequiredArgsConstructor
public class MyPageController {
    private final MemberInfoService memberInfoService;
    private final DiaryService DiaryService;

    @GetMapping("/{memberId}")
    public MemberInfo getMemberInfo(@PathVariable Long memberId) {
        Member member = member
        List<Diary> diaries = diaryService.getDiaryService(memberId);

        return new MemberInfo(member, diaries);
}
