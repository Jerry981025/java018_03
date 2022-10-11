package dao.Impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import dao.ChatDao;
import model.ChatBean;

@Repository
public class ChatDaoImpl implements ChatDao {
	
	@Autowired
	SessionFactory factory;		

	@Override
	public void saveChat(ChatBean chatBean) {		
		Session session = factory.getCurrentSession();
		session.save(chatBean);	
	}	

	@Override
	@SuppressWarnings("unchecked")
	public List<ChatBean> findAllChats() {
		Session session = factory.getCurrentSession();
		String hql = "FROM Chat";
		List<ChatBean> list = session.createQuery(hql).getResultList();
		return list;
	}
	
	@Override
	public List<ChatBean> findChatsByRoomId(Integer roomId) {
		Session session = factory.getCurrentSession();
		String hql = "FROM ChatBean WHERE roomid = :roomId";
		List<ChatBean> list = session.createQuery(hql,ChatBean.class)
								 .setParameter("roomId", roomId)
								 .getResultList();
		return list;
	}	
}
