package service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dao.OrderDao;
import model.OrderBean;
import service.OrderService;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

	private OrderDao orderDao;

	@Autowired
	public OrderServiceImpl(OrderDao orderDao) {
		this.orderDao = orderDao;
	}

	@Override
	public OrderBean findById(Integer oId) {
		return orderDao.findById(oId);
	}

	@Override
	public List<OrderBean> findByMemberId(Integer mId) {
		return orderDao.findByMemberId(mId);
	}

	@Override
	public void addOrder(OrderBean ob) {
		orderDao.addOrder(ob);
	}

	@Override
	public List<OrderBean> findAllOrders() {
		return orderDao.findAllOrders();
	}

	@Override
	public void updateOrderStatus(OrderBean ob) {
		orderDao.updateOrderStatus(ob);

	}

	@Override
	public List<OrderBean> findByOrderStatus(String status) {
		return orderDao.findByOrderStatus(status);
	}

}
