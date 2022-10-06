package model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "chat")
public class ChatBean {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	Integer auto;
	Integer roomid;
	String message;	
	
	
	public ChatBean() {
	}
	
	
	public ChatBean(Integer auto, Integer roomid, String message) {
		super();
		this.auto = auto;
		this.roomid = roomid;
		this.message = message;
	}



	public Integer getRoomid() {
		return roomid;
	}

	public void setRoomid(Integer roomid) {
		this.roomid = roomid;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}


	public Integer getAuto() {
		return auto;
	}


	public void setAuto(Integer auto) {
		this.auto = auto;
	}
	
}
