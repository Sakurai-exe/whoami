import GotoChatS from './GotoChat.module.css'
import profileImg from "../Images/profile-img.png";
import reactIcon from "../Images/reactIcon.png";

function GotoChat() {
  return (
    <div className={GotoChatS.GotoChat}>
      <img
        src={profileImg}
        alt="profile pic"
        className={`${GotoChatS.profileImg} ${GotoChatS.Animation}`}
      />
      <img src={reactIcon} alt="react icon" className={`${GotoChatS.reactIcon} ${GotoChatS.Animation}`} />
    </div>
  );
}

export default GotoChat;
