package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;

import model.MemberBean;
import model.OrderBean;
import service.RecordsService;

@RestController
public class RecordsController {
	
	@Autowired
	RecordsService recordsService;
	
	public RecordsController(RecordsService recordsService) {
		this.recordsService = recordsService;
	}

	@GetMapping(value="/RecordsINeedHelp", produces="application/json; charset=UTF-8")
	public  List<OrderBean> getOrdersByMemberId(@SessionAttribute MemberBean member
			){
//		MemberBean memberBean = (MemberBean) model.getAttribute("LoginOK");
//		if (memberBean == null) {
//			return "redirect:/_02_login/login";
//		}
		List<OrderBean> memberOrders = recordsService.findByMemberId(member.getmId());
		return memberOrders;
	}
	
	@GetMapping(value="/RecordsICanHelp", produces="application/json; charset=UTF-8")
	public  List<OrderBean> getOrdersByHelperId(@SessionAttribute MemberBean member
			){
//		MemberBean memberBean = (MemberBean) model.getAttribute("LoginOK");
//		if (memberBean == null) {
//			return "redirect:/_02_login/login";
//		}
		List<OrderBean> memberOrders = recordsService.findByHelperId(member.getmId());
		return memberOrders;
	}
	
}