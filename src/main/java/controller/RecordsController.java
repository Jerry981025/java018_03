package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import model.MemberBean;
import model.OrderBean;
import service.RecordsService;

@Controller
public class RecordsController {
	
	@Autowired
	RecordsService recordsService;
	
	public RecordsController(RecordsService recordsService) {
		this.recordsService = recordsService;
	}

	@GetMapping(value="/RecordsINeedHelp/{mId}", produces="application/json; charset=UTF-8")
	public @ResponseBody List<OrderBean> getOrdersByMemberId(
			@RequestParam(value = "mId", defaultValue = "1") Integer mId, Model model
			){
		MemberBean memberBean = new MemberBean();
//		MemberBean memberBean = (MemberBean) model.getAttribute("LoginOK");
//		if (memberBean == null) {
//			return "redirect:/_02_login/login";
//		}
		List<OrderBean> memberOrders = recordsService.findByMemberId(memberBean.getmId());
		model.addAttribute("memberOrders", memberOrders);
		return memberOrders;
	}
	
	@GetMapping(value="/RecordsDetailINeedHelp/{oId}", produces="application/json; charset=UTF-8")
	public @ResponseBody OrderBean getOrderDetailByOrderId(
			@RequestParam(value = "oId", defaultValue = "1") Integer oId, Model model
			){
		
//		MemberBean memberBean = (MemberBean) model.getAttribute("LoginOK");
//		if (memberBean == null) {
//			return "redirect:/_02_login/login";
//		}
		OrderBean orderBean = recordsService.findById(oId);
		model.addAttribute("OrderBean", orderBean);
		return orderBean;
	}
	
	
	
//	@GetMapping("/orderList")
//	protected String orderList(Model model) {
//		MemberBean memberBean = (MemberBean) model.getAttribute("LoginOK");
//		if (memberBean == null) {
//			return "redirect:/_02_login/login";
//		}
//		List<OrderBean> memberOrders = orderService.findByMemberId(memberBean.getMemberId());
//		model.addAttribute("memberOrders", memberOrders);
//		log.info("會員:" + memberBean.getMemberId() + "的訂單: " + memberOrders);
//		return "_05_orderProcess/OrderList";
//	}
//	
//	@GetMapping("/orderDetail")
//	protected String orderDetail(Model model, 
//			@RequestParam("orderNo") Integer orderNo 
//			) {
//		MemberBean memberBean = (MemberBean) model.getAttribute("LoginOK");
//		if (memberBean == null) {
//			return "redirect:/_02_login/login";
//		}
//		OrderBean ob = orderService.findById(orderNo);
//		model.addAttribute("OrderBean", ob);
//		log.info("訂單編號:" + orderNo + "的內容: " + ob);
//		return "_05_orderProcess/ShowOrderDetail";
//	}
}