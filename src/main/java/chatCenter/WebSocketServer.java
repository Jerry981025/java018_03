package chatCenter;

import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

import javax.servlet.http.HttpSession;
import javax.websocket.EndpointConfig;
import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

import model.MemberBean;

@ServerEndpoint(value = "/chatCenter/{roomName}", configurator = HttpSessionConfigurator.class)
public class WebSocketServer {
	private static final Map<String, Set<Session>> rooms = new ConcurrentHashMap<>();
	private EndpointConfig config;

	@OnOpen
	public void onOpen(@PathParam("roomName") String roomName, Session session, EndpointConfig config)
			throws Exception {
		this.config = config;
		if (!rooms.containsKey(roomName)) {
			Set<Session> room = new HashSet<Session>();
			room.add(session);
			rooms.put(roomName, room);
		} else {
			Set<Session> roomUserSet = rooms.get(roomName);
			roomUserSet.add(session);
			
		}			
	}

	@OnClose
	public void onClose(@PathParam("roomName") String roomName, Session session) {
		rooms.get(roomName).remove(session);
		System.out.println("a client has disconnected!");
	}

	@OnMessage
	public void onMessage(@PathParam("roomName") String roomName, String msg, Session session)
			throws Exception {
		msg = getUsername() + ":" + msg;
		System.out.println(msg);
		for (Session receiverSession : rooms.get(roomName)) {
			receiverSession.getAsyncRemote().sendText(msg);
		}
	}

	private String getUsername() {
		final HttpSession httpSession = (HttpSession) config.getUserProperties().get("httpSession");
		MemberBean mb = (MemberBean) httpSession.getAttribute("member");
		return mb.getmLastName();
	}
}