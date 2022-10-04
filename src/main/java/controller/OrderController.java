package controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import model.OrderBean;
import service.OrderService;
import vo.OrderVo;

@Controller
@RequestMapping("/iNeedHelp")
public class OrderController {

	OrderService orderService;

	@Autowired
	public OrderController(OrderService orderService) {
		this.orderService = orderService;
	}

	@GetMapping("/addOrder")
	public String addOrders() {
		return "iNeedHelp/iNeedHelp";
	}

	@GetMapping("/myOrders")
	public String myOrders() {
		return "iNeedHelp/queryOrderByMemberId";
	}

	@PostMapping(value = "/add", produces = { "application/json; charset=UTF-8" })
	public @ResponseBody void addOrder(@RequestBody() OrderVo params) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		OrderBean bean = new OrderBean();
		bean.setmId(001);
		bean.setoShippingAddress(params.getoShippingAddress());
		bean.setoDestinationAddress(params.getoDestinationAddress());
		bean.setoFee(params.getoFee());
		bean.setoPrice(params.getoPrice());
		bean.setoDeadLine(params.getoDeadLine());
		bean.setoOrderType(params.getoOrderType());
		bean.setoComment(params.getoComment());
		bean.setoRanking(0);
		bean.setoTime(sdf.format(new Date()));
		bean.setoOrderStatus("未完成");
		bean.setItems(params.getItem());
		orderService.addOrder(bean);
	}

	@GetMapping("/list")
	public @ResponseBody List<OrderBean> orderListById(Integer mId) {
		mId = 1;
		List<OrderBean> memberOrders = orderService.findByMemberId(mId);
		return memberOrders;
	}

	@GetMapping("/allOrders")
	public @ResponseBody List<OrderBean> orderList() {
		List<OrderBean> list = orderService.findAllOrders();
		System.out.println(list);
		return list;
	}

	@PutMapping(value = "/cancel", produces = { "application/json; charset=UTF-8" })
	public @ResponseBody String updateMember(@RequestBody() Integer oId) {
		OrderBean bean = orderService.findById(oId);
		if (!bean.getoOrderStatus().equals("未完成")) {
			return "訂單不能取消";
		} else {
			bean.setoOrderStatus("已取消");
			orderService.updateOrderStatus(bean);
			return "訂單取消成功";
		}

	}

	@GetMapping("/status")
	public @ResponseBody List<OrderBean> findByOrderStatus(@RequestParam() String status) {
		List<OrderBean> ob = orderService.findByOrderStatus(status);
		return ob;
	}
}
