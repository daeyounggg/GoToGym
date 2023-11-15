package gotogym.commons;

import gotogym.commons.constants.MemberType;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import gotogym.entities.Member;

@Component
@RequiredArgsConstructor
public class MemberUtil {
    private final HttpSession session;

    /**
     * 로그인 여부 체크
     * @return
     */
    public boolean isLogin() {
        return getMember() != null;
    }

    /**
     * 관리자 여부 체크
     * @return
     */
    public boolean isAdmin() {
        return isLogin() && getMember().getMtype() == MemberType.ADMIN;
    }


    public Member getMember() {
        return (Member)session.getAttribute("loginMember");
    }
}
