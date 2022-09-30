package controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import model.MemberBean;
import model.OrderBean;
import service.OrderService;
import vo.OrderVo;

@Controller
@RequestMapping("/order")
public class OrderController {

	OrderService orderService;

	@Autowired
	public OrderController(OrderService orderService) {
		this.orderService = orderService;
	}


	@PostMapping(value = "/add", produces = { "application/json; charset=UTF-8" })
	public @ResponseBody void addOrder(@RequestBody() OrderVo params) {
		System.out.println(params);
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
	public @ResponseBody List<OrderBean> orderListById(
			@RequestParam(name = "mId", defaultValue = "1") Integer id,Model model
			) {
		MemberBean memberBean = new MemberBean();
		memberBean.setmId(3);
		List<OrderBean> memberOrders = orderService.findByMemberId(memberBean.getmId());
//		System.out.println(memberBean);
//		model.addAttribute("memberOrders", memberOrders);
		return memberOrders;
	}
	
	@GetMapping("/allOrders")
	public @ResponseBody List<OrderBean> orderList() {
		List<OrderBean> list = orderService.findAllOrders();
//		model.addAttribute("allOrders", list);
		System.out.println(list);
		return list;
	}
}
