package model;

import java.sql.Clob;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "order")
public class OrderBean {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer oId;
	private Integer mId;
	private String oShippingAddress;
	private String oDestinationAddress;
	private Date oTime;
	private Double oFee;
	private Integer oPrice;
	private Date oDeadLine;
	private String oOrderType;
	private Clob oComment;
	private String oRanking;
	
	public OrderBean() {
	}
	
	@OneToMany(mappedBy="orderBean", cascade=CascadeType.ALL)
	Set<OrderItemBean> items = new HashSet<>();

	public OrderBean(Integer oId, Integer mId, String oShippingAddress, String oDestinationAddress, Date oTime,
			Double oFee, Integer oPrice, Date oDeadLine, String oOrderType, Clob oComment, String oRanking,
			Set<OrderItemBean> items) {
		this.oId = oId;
		this.mId = mId;
		this.oShippingAddress = oShippingAddress;
		this.oDestinationAddress = oDestinationAddress;
		this.oTime = oTime;
		this.oFee = oFee;
		this.oPrice = oPrice;
		this.oDeadLine = oDeadLine;
		this.oOrderType = oOrderType;
		this.oComment = oComment;
		this.oRanking = oRanking;
		this.items = items;
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

	public String getoShippingAddress() {
		return oShippingAddress;
	}

	public void setoShippingAddress(String oShippingAddress) {
		this.oShippingAddress = oShippingAddress;
	}

	public String getoDestinationAddress() {
		return oDestinationAddress;
	}

	public void setoDestinationAddress(String oDestinationAddress) {
		this.oDestinationAddress = oDestinationAddress;
	}

	public Date getoTime() {
		return oTime;
	}

	public void setoTime(Date oTime) {
		this.oTime = oTime;
	}

	public Double getoFee() {
		return oFee;
	}

	public void setoFee(Double oFee) {
		this.oFee = oFee;
	}

	public Integer getoPrice() {
		return oPrice;
	}

	public void setoPrice(Integer oPrice) {
		this.oPrice = oPrice;
	}

	public Date getoDeadLine() {
		return oDeadLine;
	}

	public void setoDeadLine(Date oDeadLine) {
		this.oDeadLine = oDeadLine;
	}

	public String getoOrderType() {
		return oOrderType;
	}

	public void setoOrderType(String oOrderType) {
		this.oOrderType = oOrderType;
	}

	public Clob getoComment() {
		return oComment;
	}

	public void setoComment(Clob oComment) {
		this.oComment = oComment;
	}

	public String getoRanking() {
		return oRanking;
	}

	public void setoRanking(String oRanking) {
		this.oRanking = oRanking;
	}

	public Set<OrderItemBean> getItems() {
		return items;
	}

	public void setItems(Set<OrderItemBean> items) {
		this.items = items;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("OrderBean [oId=");
		builder.append(oId);
		builder.append(", mId=");
		builder.append(mId);
		builder.append(", oShippingAddress=");
		builder.append(oShippingAddress);
		builder.append(", oDestinationAddress=");
		builder.append(oDestinationAddress);
		builder.append(", oTime=");
		builder.append(oTime);
		builder.append(", oFee=");
		builder.append(oFee);
		builder.append(", oPrice=");
		builder.append(oPrice);
		builder.append(", oDeadLine=");
		builder.append(oDeadLine);
		builder.append(", oOrderType=");
		builder.append(oOrderType);
		builder.append(", oComment=");
		builder.append(oComment);
		builder.append(", oRanking=");
		builder.append(oRanking);
		builder.append(", items=");
		builder.append(items);
		builder.append("]");
		return builder.toString();
	}

	

}
