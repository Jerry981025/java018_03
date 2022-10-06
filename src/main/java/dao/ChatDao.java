package dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import model.ChatBean;

@Repository
public interface ChatDao {		

	void saveChat(ChatBean chatBean);	
	
	List<ChatBean> findAllChats();	
	
	List<ChatBean> findChatsByRoomId(Integer roomId);
}
