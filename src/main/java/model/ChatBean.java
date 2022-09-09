package model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "chat")
public class ChatBean implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer cId;
	private Integer oId;
	private Integer mId;
	private java.util.Date cTime;
	private String cContent;
	
	public ChatBean() {
	}

	public ChatBean(Integer cId, Integer oId, Integer mId, Date cTime, String cContent) {
		this.cId = cId;
		this.oId = oId;
		this.mId = mId;
		this.cTime = cTime;
		this.cContent = cContent;
	}

	public Integer getcId() {
		return cId;
	}

	public void setcId(Integer cId) {
		this.cId = cId;
	}

	public Integer getoId() {
		return oId;
	}

	public void setoId(Integer oId) {
		this.oId = oId;
	}

	public Integer getmId() {
		return mId;
	}

	public void setmId(Integer mId) {
		this.mId = mId;
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
		return "ChatBean [cId=" + cId + ", oId=" + oId + ", mId=" + mId + ", cTime=" + cTime + ", cContent=" + cContent
				+ "]";
	}

	
	
	
}
