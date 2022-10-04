package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
	public  List<OrderBean> getOrdersByMemberId(
			@RequestParam(value = "mId", defaultValue = "1") Integer mId, Model model
			){
		// for test
		MemberBean memberBean = new MemberBean();
		memberBean.setmId(1);
//		MemberBean memberBean = (MemberBean) model.getAttribute("LoginOK");
//		if (memberBean == null) {
//			return "redirect:/_02_login/login";
//		}
		List<OrderBean> memberOrders = recordsService.findByMemberId(memberBean.getmId());
		return memberOrders;
	}
	
	@GetMapping(value="/RecordsICanHelp", produces="application/json; charset=UTF-8")
	public  List<OrderBean> getOrdersByHelperId(
			@RequestParam(value = "hId", defaultValue = "1") Integer hId, Model model
			){
		// for test
		MemberBean memberBean = new MemberBean();
		memberBean.setmId(1);
//		MemberBean memberBean = (MemberBean) model.getAttribute("LoginOK");
//		if (memberBean == null) {
//			return "redirect:/_02_login/login";
//		}
		List<OrderBean> memberOrders = recordsService.findByHelperId(memberBean.getmId());
		return memberOrders;
	}
	
}