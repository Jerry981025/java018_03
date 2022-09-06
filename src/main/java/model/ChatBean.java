package model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
//因為沒有自己的ID 所以不能用Entity
//@Entity
@Table(name = "chat")
public class ChatBean implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Integer order_OId;
	private Integer member_MId;
	@Column(name = "CTime")
	private java.util.Date cTime;
	@Column(name = "CContent")
	private String cContent;
	
	public ChatBean() {
	}

	public ChatBean(Integer order_OId, Integer member_MId, Date cTime, String cContent) {
		this.order_OId = order_OId;
		this.member_MId = member_MId;
		this.cTime = cTime;
		this.cContent = cContent;
	}

	public Integer getOrder_OId() {
		return order_OId;
	}

	public void setOrder_OId(Integer order_OId) {
		this.order_OId = order_OId;
	}

	public Integer getMember_MId() {
		return member_MId;
	}

	public void setMember_MId(Integer member_MId) {
		this.member_MId = member_MId;
	}

	public java.util.Date getcTime() {
		return cTime;
	}

	public void setcTime(java.util.Date cTime) {
		this.cTime = cTime;
	}

	public String getcContent() {
		return cContent;
	}

	public void setcContent(String cContent) {
		this.cContent = cContent;
	}

	@Override
	public String toString() {
		return "ChatBean [order_OId=" + order_OId + ", member_MId=" + member_MId + ", cTime=" + cTime + ", cContent="
				+ cContent + "]";
	}
	
	
	
}
