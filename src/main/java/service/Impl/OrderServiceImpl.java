package service.Impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dao.OrderDao;
import dao.RecordsDao;
import ecpay.payment.integration.AllInOne;
import ecpay.payment.integration.domain.AioCheckOutALL;
import javassist.Loader.Simple;
import model.OrderBean;
import model.OrderItemBean;
import net.bytebuddy.asm.Advice.AllArguments;
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
	public List<OrderBean> findByOrderStatus(String status, Integer mId) {
		List<OrderBean> orders = orderDao.findByOrderStatus(status);
		for (int i = 0; i < orders.size(); i++) {
			if (orders.get(i).getmId() == mId) {
				orders.remove(i);
			}
		}
		return orders;
	}

	@Override
	public String ecpayValidation(OrderBean orderBean) {
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		String tradeDate = sdf.format(new Date());
		AllInOne allInOne = new AllInOne("");
		AioCheckOutALL aioCheckOutALL = new AioCheckOutALL();
		aioCheckOutALL.setMerchantTradeNo(orderBean.getoId()+ "Help");
		aioCheckOutALL.setMerchantTradeDate(tradeDate);
		Integer oTotal = orderBean.getoFee() + orderBean.getoPrice();
		aioCheckOutALL.setTotalAmount(oTotal.toString());
		aioCheckOutALL.setTradeDesc("幫幫忙測試付款");
		aioCheckOutALL.setReturnURL("http://localhost:8080/java018_03/INHrecords");
		aioCheckOutALL.setNeedExtraPaidInfo("N");
		aioCheckOutALL.setItemName("跑腿費及商品合計");
		
//		System.out.println(allInOne.aioCheckOut(aioCheckOutALL, null));
		return allInOne.aioCheckOut(aioCheckOutALL, null);
	}
}
