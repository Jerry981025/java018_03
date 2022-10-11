package controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import model.MemberBean;
import model.OrderBean;
import service.OrderService;
import vo.OrderVo;

@Controller
public class OrderController {

	OrderService orderService;
	String result;

	@Autowired
	public OrderController(OrderService orderService) {
		this.orderService = orderService;
	}

	@GetMapping("/addOrder")
	public String addOrders() {
		return "iNeedHelp";
	}

	@GetMapping("/myOrders")
	public String myOrders() {
		return "queryOrderByMemberId";
	}

	@GetMapping("/orderItem")
	public String orderitem() {
		return "orderItem";
	}

	@PostMapping(value = "/add", produces = { "application/json; charset=UTF-8" })
	public @ResponseBody String addOrder(@RequestBody() OrderVo params, @SessionAttribute MemberBean member) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		OrderBean bean = new OrderBean();
		bean.setmId(member.getmId());
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
		bean.sethId(0);
		orderService.addOrder(bean);
		
		return orderService.ecpayValidation(bean);
	}

	@GetMapping("/list")
	public @ResponseBody List<OrderBean> orderListById(Integer mId) {
		return orderService.findByMemberId(mId);
	}

	@GetMapping("/allOrders")
	public @ResponseBody List<OrderBean> orderList() {
		List<OrderBean> list = orderService.findAllOrders();
		System.out.println(list);
		return list;
	}

	@PutMapping(value = "/cancelOrder", produces = { "application/json; charset=UTF-8" })
	public @ResponseBody String cancelOrder(@RequestBody() Integer oId) {
		OrderBean bean = orderService.findById(oId);
		if (!bean.getoOrderStatus().equals("未完成")) {
			return "訂單不能取消";
		} else {
			bean.setoOrderStatus("已取消");
			orderService.updateOrderStatus(bean);
			return "訂單取消成功";
		}

	}

	@PutMapping(value = "/rateOrder", produces = { "application/json; charset=UTF-8" })
	public @ResponseBody void rateOrder(@RequestBody() OrderVo params) {
		System.out.println(params);
		OrderBean bean = orderService.findById(params.getoId());
		bean.setoRanking(params.getoRanking());
		orderService.updateOrderStatus(bean);
	}

	@GetMapping("/status")
	public @ResponseBody List<OrderBean> findByOrderStatus(@RequestParam() String status,
			@SessionAttribute MemberBean member) {
		List<OrderBean> ob = orderService.findByOrderStatus(status, member.getmId());
		return ob;
	}
	
	@PutMapping(value = "/finishOrder", produces = { "application/json; charset=UTF-8" })
	public @ResponseBody String finishOrder(@RequestBody() Integer oId) {
		OrderBean bean = orderService.findById(oId);
		if (bean.getoOrderStatus().equals("進行中")) {
			bean.setoOrderStatus("已完成");
			orderService.updateOrderStatus(bean);
			return "已完成訂單";
		} else {
			return "未接單，無法完成訂單";
		}

	}
}
