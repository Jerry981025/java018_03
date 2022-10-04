package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import model.OrderBean;
import service.OrderService;

@Controller
public class UpdateOrderStatusController {
	
	OrderService orderService;
	
	@PutMapping(value = "/change", produces = { "application/json; charset=UTF-8" })
	public @ResponseBody String updateOrderStatus(@RequestBody() Integer oId) {
		OrderBean orderBean = orderService.findById(oId);
		if (orderBean.getoOrderStatus().equals("未完成")) {
			orderService.updateOrderStatus(orderBean);
			orderBean.setoOrderStatus("進行中");
			return "已確認接單";
		} else {
			return "訂單正在進行中";
		}

	}


}
