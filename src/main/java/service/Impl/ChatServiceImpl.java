package service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import dao.ChatDao;
import model.ChatBean;
import service.ChatService;

@Service
@Transactional
@EnableTransactionManagement
public class ChatServiceImpl implements ChatService {
	
	@Autowired
	ChatDao chatDao;
	
	
	public ChatServiceImpl(ChatDao chatDao) {
		super();
		this.chatDao = chatDao;		
	}	

	@Override
	public void saveChat(ChatBean chatBean) {
		 chatDao.saveChat(chatBean);
	}	

	@Override
	public List<ChatBean> findAllChats() {
		return chatDao.findAllChats();
	}

	@Override
	public List<ChatBean> findChatsByRoomId(Integer roomId) {
		return chatDao.findChatsByRoomId(roomId);
	}
}
