package controller;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import model.KullaVO;
import model.OrderBean;
import service.OrderService;

@Controller
@RequestMapping("/order")
public class OrderController {
	
	OrderService orderService;
	
	
	
	
	@Autowired
	public OrderController(OrderService orderService) {
		this.orderService = orderService;
	}




//	@GetMapping("/iNeedHelp")
//	public String sendingEmptyOrder(Model model) {
//		OrderBean ob = new OrderBean();
////		OrderItemBean oib = new OrderItemBean();
//		model.addAttribute("orderBean", ob);
////		model.addAttribute("orderItemBean", oib);
//		return "iNeedHelp/iNeedHelp";
//		
//	}
//	
//	@PostMapping("/iNeedHelp")
//	public String ProcessOrder(
//			@ModelAttribute("orderBean") OrderBean ob
//			) {
//		orderService.addOrder(ob);;
//		return "iNeedHelp/iNeedHelp";
//	}
	
	@PostMapping(value = "/add", produces = {"application/json; charset=UTF-8" })
	public @ResponseBody void addOrder(
			@RequestBody KullaVO params
			) {
		System.out.println(params);
		OrderBean bean = new OrderBean();
		bean.setmId(001);
		bean.setoShippingAddress(params.getoShippingAddress());
		bean.setoDestinationAddress(params.getoDestinationAddress());
		bean.setoFee(params.getoFee());
		bean.setoPrice(params.getoPrice());
		bean.setoDeadLine(params.getoDeadLine());
		bean.setoOrderType(params.getoOrderType());
		bean.setoComment(params.getoComment());
		bean.setoRanking("3");
		bean.setoTime(params.getoDeadLine());
//		bean.setoId(001);
		System.out.println(bean);
		orderService.addOrder(bean);
//		return "redircet:/iNeedHelp/iNeedHelp";
	}
}
