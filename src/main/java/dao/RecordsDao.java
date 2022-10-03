package dao;

import java.util.List;

import model.OrderBean;

public interface RecordsDao {

	List<OrderBean> findByMemberId(Integer mId);
	
}
