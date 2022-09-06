package model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "help")
public class HelpBean implements Serializable{

	private static final long serialVersionUID = 1L;

	private Integer member_MId;
	private Integer order_OId;
	private String hStatus;
	private Date hTime;
	
	public HelpBean() {
	}

	public HelpBean(Integer member_MId, Integer order_OId, String hStatus, Date hTime) {
		this.member_MId = member_MId;
		this.order_OId = order_OId;
		this.hStatus = hStatus;
		this.hTime = hTime;
	}

	public Integer getMember_MId() {
		return member_MId;
	}

	public void setMember_MId(Integer member_MId) {
		this.member_MId = member_MId;
	}

	public Integer getOrder_OId() {
		return order_OId;
	}

	public void setOrder_OId(Integer order_OId) {
		this.order_OId = order_OId;
	}

	public String gethStatus() {
		return hStatus;
	}

	public void sethStatus(String hStatus) {
		this.hStatus = hStatus;
	}

	public Date gethTime() {
		return hTime;
	}

	public void sethTime(Date hTime) {
		this.hTime = hTime;
	}

	@Override
	public String toString() {
		return "HelpBean [member_MId=" + member_MId + ", order_OId=" + order_OId + ", hStatus=" + hStatus + ", hTime="
				+ hTime + "]";
	}
	
}
