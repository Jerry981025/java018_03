package model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "orderitem")
public class OrderItemBean {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer seqno;
	private String oBrand;
	private String oDetail;
	private Integer oQuantity;
//	private Blob oPic;
	
	@JsonIgnore
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "FK_orderBean")
	OrderBean orderBean;
	
	public OrderItemBean() {
	}

	public OrderItemBean(Integer seqno, String oBrand, String oDetail, Integer oQuantity
			, OrderBean orderBean//, Integer oId
			) {
		this.seqno = seqno;
		this.oBrand = oBrand;
		this.oDetail = oDetail;
		this.oQuantity = oQuantity;
//		this.oId = oId;
		this.orderBean = orderBean;
	}

	public Integer getSeqno() {
		return seqno;
	}

//	public Integer getoId() {
//		return oId;
//	}
//
//	public void setoId(Integer oId) {
//		this.oId = oId;
//	}

	public void setSeqno(Integer seqno) {
		this.seqno = seqno;
	}


	public String getoBrand() {
		return oBrand;
	}

	public void setoBrand(String oBrand) {
		this.oBrand = oBrand;
	}

	public String getoDetail() {
		return oDetail;
	}

	public void setoDetail(String oDetail) {
		this.oDetail = oDetail;
	}

	public Integer getoQuantity() {
		return oQuantity;
	}

	public void setoQuantity(Integer oQuantity) {
		this.oQuantity = oQuantity;
	}

//	public Blob getoPic() {
//		return oPic;
//	}
//
//	public void setoPic(Blob oPic) {
//		this.oPic = oPic;
//	}
//
	public OrderBean getOrderBean() {
		return orderBean;
	}

	public void setOrderBean(OrderBean orderBean) {
		this.orderBean = orderBean;
	}

	
	
	
}
