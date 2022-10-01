package dao;

import java.util.List;

import model.OrderBean;

public interface RecordsDao {

	OrderBean findById(Integer oId);

	List<OrderBean> findByMemberId(Integer mId);
	
}
