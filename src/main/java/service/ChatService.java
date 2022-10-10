package service;

import java.util.List;

import model.ChatBean;



public interface ChatService {	

	void saveChat(ChatBean chatBean);
	
	List<ChatBean> findAllChats();
	
	List<ChatBean> findChatsByRoomId(Integer roomId);
}
