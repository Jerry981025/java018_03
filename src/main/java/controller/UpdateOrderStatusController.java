package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;

import model.MemberBean;
import model.OrderBean;
import service.OrderService;

@Controller
public class UpdateOrderStatusController {
	@Autowired
	OrderService orderService;
	
	@PutMapping(value = "/updateOrderStatus", produces = { "application/json; charset=UTF-8" })
	public @ResponseBody String updateOrderStatus(@RequestBody() Integer oId,@SessionAttribute MemberBean member) {
		OrderBean orderBean = orderService.findById(oId);
		if (orderBean.getoOrderStatus().equals("未完成")) {
			orderBean.setoOrderStatus("進行中");
			orderBean.sethId(member.getmId());
			orderService.updateOrderStatus(orderBean);
			return "已確認接單";
		} else {
			return "訂單正在進行中";
		}

	}


}
