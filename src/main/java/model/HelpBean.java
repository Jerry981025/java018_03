package model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "help")
public class HelpBean implements Serializable{

	private static final long serialVersionUID = 1L;

	private Integer mId;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer hId;
	private Integer oId;
	private String hStatus;
	private Date hTime;
	
	public HelpBean() {
	}

	public HelpBean(Integer mId, Integer hId, Integer oId, String hStatus, Date hTime) {
		this.mId = mId;
		this.hId = hId;
		this.oId = oId;
		this.hStatus = hStatus;
		this.hTime = hTime;
	}

	public Integer getmId() {
		return mId;
	}

	public void setmId(Integer mId) {
		this.mId = mId;
	}

	public Integer gethId() {
		return hId;
	}

	public void sethId(Integer hId) {
		this.hId = hId;
	}

	public Integer getoId() {
		return oId;
	}

	public void setoId(Integer oId) {
		this.oId = oId;
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
		return "HelpBean [mId=" + mId + ", hId=" + hId + ", oId=" + oId + ", hStatus=" + hStatus + ", hTime=" + hTime
				+ "]";
	}

}
