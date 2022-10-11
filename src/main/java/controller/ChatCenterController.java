package controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;

import model.ChatBean;
import model.MemberBean;
import service.ChatService;

@Controller
public class ChatCenterController {	
	
	ChatService chatService;
	
	
	public ChatCenterController() {
	}
	
	@Autowired
	public ChatCenterController(ChatService chatService) {
		super();
		this.chatService = chatService;		
	}	
	
	@GetMapping("/chatFinal")
	public String chatFinal() {
		return "chatFinal";
	}
	
	
	@GetMapping("/chatCenter")
	public String chatCenter() {
		return "chatCenter";
	}
	
	@GetMapping("/chats")
	@ResponseBody
	public List<ChatBean> findChatsByRoomId(
			@RequestParam(name = "roomId") Integer roomId
			) {
		List<ChatBean> chats = chatService.findChatsByRoomId(roomId);
		return chats;
	}
	
	@PostMapping(value="/chats", consumes = "application/json")
	public  Map<String, String> save(@RequestBody ChatBean ChatBean,@SessionAttribute MemberBean member) {
		Map<String, String> map = new HashMap<>();
		ChatBean.setMessage(member.getmLastName() + ":" + ChatBean.getMessage());
		chatService.saveChat(ChatBean);				
		return map;
	}	
	
}
